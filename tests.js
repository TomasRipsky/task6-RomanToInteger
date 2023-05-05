test("Example", function (assert) {
  assert.propEqual(
    convertRomanToInteger("I"),
    { value: 1, message: "", result: true },
    "TC-EXAMPLE"
  );
});

test("TC-1: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(1),
    { value: "I", message: "", result: true },
    "TC-1"
  );
});

test("TC-2: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(1997),
    { value: "MCMXCVII", message: "", result: true },
    "TC-2"
  );
});

test("TC-3: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(3999),
    { value: "MMMCMXCIX", message: "", result: true },
    "TC-3"
  );
});

test("TC-4: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman("abc"),
    { value: 0, message: "Please enter a valid integer", result: false },
    "TC-4"
  );
});

test("TC-5: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(-5),
    { value: 0, message: "Please enter a valid integer", result: false },
    "TC-5"
  );
});

test("TC-6: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(0),
    { value: 0, message: "Out of range (1-3999)", result: false },
    "TC-6"
  );
});

test("TC-7: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(3.14),
    { value: 0, message: "Please enter a valid integer", result: false },
    "TC-7"
  );
});

test("TC-8: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(5000),
    {
      value: 0,
      message: "Out of range (1-3999)",
      result: false,
    },
    "TC-8"
  );
});

test("TC-9: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(-500),
    {
      value: 0,
      message: "Please enter a valid integer",
      result: false,
    },
    "TC-9"
  );
});

test("TC-10: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(846),
    { value: "DCCCXLVI", message: "", result: true },
    "TC-10"
  );
});

test("TC-11: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(1000),
    { value: "M", message: "", result: true },
    "TC-11"
  );
});

test("TC-12: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(296),
    { value: "CCXCVI", message: "", result: true },
    "TC-12"
  );
});

test("TC-13: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(4000),
    {
      value: 0,
      message: "Out of range (1-3999)",
      result: false,
    },
    "TC-13"
  );
});

test("TC-14: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(-100),
    {
      value: 0,
      message: "Please enter a valid integer",
      result: false,
    },
    "TC-14"
  );
});

test("TC-15: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman("XIV"),
    { value: 0, message: "Please enter a valid integer", result: false },
    "TC-15"
  );
});

test("TC-16: Convert Integer to Roman", function (assert) {
  assert.propEqual(
    convertIntegerToRoman(""),
    {
      value: 0,
      message: "Please enter a valid integer",
      result: false,
    },
    "TC-16"
  );
});

test("TC-1: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("I"),
    {
      value: 1,
      message: "",
      result: true,
    },
    "TC-1"
  );
});

test("TC-2: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("MCMXCVII"),
    {
      value: 1997,
      message: "",
      result: true,
    },
    "TC-2"
  );
});

test("TC-3: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("MMMCMXCIX"),
    {
      value: 3999,
      message: "",
      result: true,
    },
    "TC-3"
  );
});

test("TC-4: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("ABC"),
    {
      value: 0,
      message: "Please enter a valid roman",
      result: false,
    },
    "TC-4"
  );
});

test("TC-5: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("VIIII"),
    {
      value: 0,
      message: "Please enter a valid roman",
      result: false,
    },
    "TC-5"
  );
});

test("TC-6: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("LIXX"),
    {
      value: 0,
      message: "Please enter a valid roman",
      result: false,
    },
    "TC-6"
  );
});

test("TC-7: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("MCM"),
    {
      value: 1900,
      message: "",
      result: true,
    },
    "TC-7"
  );
});

test("TC-8: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("XL"),
    {
      value: 40,
      message: "",
      result: true,
    },
    "TC-8"
  );
});

test("TC-9: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("DCCLXXXIX"),
    {
      value: 789,
      message: "",
      result: true,
    },
    "TC-9"
  );
});

test("TC-10: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger(""),
    {
      value: 0,
      message: "Please enter a valid roman",
      result: false,
    },
    "TC-10"
  );
});

test("TC-11: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("XYZ"),
    {
      value: 0,
      message: "Please enter a valid roman",
      result: false,
    },
    "TC-11"
  );
});

test("TC-12: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("MXDCI"),
    {
      value: 0,
      message: "Please enter a valid roman",
      result: false,
    },
    "TC-12"
  );
});

test("TC-13: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("DCCXCVIII"),
    {
      value: 798,
      message: "",
      result: true,
    },
    "TC-13"
  );
});

test("TC-14: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("CCLXVIII"),
    {
      value: 268,
      message: "",
      result: true,
    },
    "TC-14"
  );
});

test("TC-15: convertRomanToInteger", function (assert) {
  assert.propEqual(
    convertRomanToInteger("XII"),
    {
      value: 12,
      message: "",
      result: true,
    },
    "TC-15"
  );
});
