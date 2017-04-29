contract wealth {

  bool public pearlJam = false;
  function wealth() constant returns (string) {
      return "OK";
  }

  function updateBool(bool _newUp) returns (bool success) {
    pearlJam = _newUp;
    return true;
  }
}
