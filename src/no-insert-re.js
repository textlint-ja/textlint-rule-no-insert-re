// LICENSE : MIT
"use strict";
import { RuleHelper } from "textlint-rule-helper";
import kuromojin from "kuromojin";

function isTargetVerb(token) {
    return token.pos == "動詞" && token.conjugated_type == "一段";
}

function isReruWord(token) {
    return token.pos == "動詞" && token.pos_detail_1 == "接尾" && token.basic_form == "れる";
}

function isKoreru(token) {
    return token.pos == "動詞" && token.basic_form == "来れる";
}

module.exports = function(context) {
    const helper = new RuleHelper(context);
    let { Syntax, report, getSource, RuleError } = context;
    return {
        [Syntax.Str](node) {
            if (helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote, Syntax.Emphasis])) {
                return;
            }
            let text = getSource(node);
            return kuromojin(text).then(tokens => {
                tokens.reduce((prev, current) => {
                    if (isTargetVerb(prev) && isReruWord(current)) {
                        report(
                            node,
                            new RuleError("れ足す言葉を使用しています。", {
                                index: current.word_position - 1
                            })
                        );
                    }
                    return current;
                });
            });
        }
    };
};
