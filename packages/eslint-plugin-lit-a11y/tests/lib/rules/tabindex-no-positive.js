/**
 * @fileoverview Enforce tabIndex value is not greater than zero.
 * @author open-wc
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/tabindex-no-positive');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
});
ruleTester.run('tabindex-no-positive', rule, {
  valid: [
    {
      code: "html`<div tabindex='0'></div>`",
    },
    {
      code: "html`<div tabindex='${'0'}'></div>`", // eslint-disable-line
    },
    {
      code: "html`<div tabindex='${0}'></div>`", // eslint-disable-line
    },
    {
      code: "html`<div tabindex='-1'></div>`",
    },
    {
      code: 'html`<div tabindex=${foo}></div>`', // eslint-disable-line
      errors: [
        {
          message: 'Invalid tabindex value.',
        },
      ],
    },
  ],

  invalid: [
    {
      code: "html`<div tabindex='1'></div>`",
      errors: [
        {
          message: 'Avoid positive tabindex.',
        },
      ],
    },
    {
      code: "html`<div tabindex='2'></div>`",
      errors: [
        {
          message: 'Avoid positive tabindex.',
        },
      ],
    },
    {
      code: "html`<div tabindex='foo'></div>`",
      errors: [
        {
          message: 'Invalid tabindex value.',
        },
      ],
    },
    {
      code: "html`<div tabindex=${'bar'}></div>`", // eslint-disable-line
      errors: [
        {
          message: 'Invalid tabindex value.',
        },
      ],
    },
    {
      code: 'html`<div tabindex=${true}></div>`', // eslint-disable-line
      errors: [
        {
          message: 'Invalid tabindex value.',
        },
      ],
    },
    {
      code: 'html`<div tabindex=${undefined}></div>`', // eslint-disable-line
      errors: [
        {
          message: 'Invalid tabindex value.',
        },
      ],
    },
    {
      code: 'html`<div tabindex=${null}></div>`', // eslint-disable-line
      errors: [
        {
          message: 'Invalid tabindex value.',
        },
      ],
    },
    {
      code: 'html`<div tabindex=${1}></div>`', // eslint-disable-line
      errors: [
        {
          message: 'Avoid positive tabindex.',
        },
      ],
    },
    {
      code: "html`<div tabindex=${'1'}></div>`", // eslint-disable-line
      errors: [
        {
          message: 'Avoid positive tabindex.',
        },
      ],
    },
  ],
});
