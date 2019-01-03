# textlint-rule-no-insert-re [![Build Status](https://travis-ci.org/textlint-ja/textlint-rule-no-insert-re.svg?branch=master)](https://travis-ci.org/textlint-ja/textlint-rule-no-insert-re) [![Gitter](https://badges.gitter.im/textlint-ja/textlint-ja.svg)](https://gitter.im/textlint-ja/textlint-ja)

れ足す言葉を検出する[textlint](https://github.com/textlint/textlint "textlint")ルールです。

- ◯ お酒は飲めない。
- ✗ お酒は飲めれない。

## Installation

    npm install @textlint-ja/textlint-rule-no-insert-re

textlint >= 5.0

## Usage

Put no-insert-re" to `.textlintrc`

```js
{
  "rules": {
    "no-insert-re": true
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

## Reference

- [http://pj.ninjal.ac.jp/shutoken/1-38.html](http://pj.ninjal.ac.jp/shutoken/1-38.html)
