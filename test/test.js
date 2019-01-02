import assert from "power-assert";
import rule from "../src/no-insert-re";
import TextLintTester from "textlint-tester";
var tester = new TextLintTester();
tester.run("no-insert-re", rule, {
    valid: [
        "お酒は飲めない。",
        "行ける",
        "歩ける",
        "見られる",
        "飲まされる",
    ],
    invalid: [
        {
            text: "お酒は飲めれない。",
            errors: [
                {
                    message: "れ足す言葉を使用しています。",
                    line: 1,
                    column: 6
                }
            ]
        },
        {
            text: "明日行けれる。",
            errors: [
                {
                    message: "れ足す言葉を使用しています。",
                    line: 1,
                    column: 5
                }
            ]
        },
    ]
});
