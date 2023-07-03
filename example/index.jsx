import { parse, stringify } from 'json5';
import { SEMVER_SPEC_VERSION } from 'semver';

console.log(parse, SEMVER_SPEC_VERSION, stringify);

const foo = 3;

const xxx = {
  bar() {
    void 0;
  },
  tar() {
    void 0;
  },
};

console.log(foo, xxx);

function bar(a, b) {
  console.log(a, b);
}

bar();

const list = [ 1, 3 ];

setTimeout(
  () => console.log('xx'),
  3,
);

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
    <div
      style={{
        backgroundColor: 'red',
      }}
      id=""
    >
      foo
    </div>
  );
}
