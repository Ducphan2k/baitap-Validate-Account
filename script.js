function isAccount(str) {
  regexp = /^[A-Za-z0-9_]{6,}$/;
  if (regexp.test(str)) {
    console.log("account hop le");
  } else {
    console.log("account k hop le");
  }
}
// account hop le
isAccount("123abc_");
isAccount("_abc123");
isAccount("______");
isAccount("123456");
isAccount("abcdefg");

// account k hop le
isAccount(".@");
isAccount("12345");
isAccount("1234_");
isAccount("abcde ");
