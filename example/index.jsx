import { parse, stringify } from 'json5';
import { SEMVER_SPEC_VERSION } from 'semver';

console.log(parse, SEMVER_SPEC_VERSION, stringify);

const foo = 3;

const xxx = {
  bar() {
    void 0;
  },
  foo: 3,
  tar() {
    void 0;
  },
};

console.log(foo, xxx);

function bar(a, b) {
  console.log(a, b);
}

bar();

const list = [
  1,
  3,
];

setTimeout(() => console.log('xx'), 3);

console.log({
  foo: 3, 
  foo3: 3,
});

[].reduce((result, [key, value]) => {
  return {
    ...result,
    [key]: value,
  };
}, {});
console.log(list);

const dd = (foo) => {
  console.log(foo);
};

console.log(dd());

export function Foo() {
  return (
    <span
      style={{
        backgroundColor: 'red',
        backgroundOrigin: 'unset',
      }}
      id="foo"
    >
      foo
    </span>
  );
}
