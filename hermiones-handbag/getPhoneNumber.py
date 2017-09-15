global numberCombo
numberCombo = {}
numberCombo['a'] = '2'
numberCombo['b'] = '2'
numberCombo['c'] = '2'
numberCombo['d'] = '3'
numberCombo['e'] = '3'
numberCombo['f'] = '3'
numberCombo['g'] = '4'
numberCombo['h'] = '4'
numberCombo['i'] = '4'
numberCombo['j'] = '5'
numberCombo['k'] = '5'
numberCombo['l'] = '5'
numberCombo['m'] = '6'
numberCombo['n'] = '6'
numberCombo['o'] = '6'
numberCombo['p'] = '7'
numberCombo['q'] = '7'
numberCombo['r'] = '7'
numberCombo['s'] = '7'
numberCombo['t'] = '8'
numberCombo['u'] = '8'
numberCombo['v'] = '8'
numberCombo['w'] = '1'
numberCombo['x'] = '1'
numberCombo['y'] = '1'
numberCombo['z'] = '1'

def phone_number(string): 
  result = ''
  count = 0
  foundResult = False
  
  for char in string:
    print(char)
    print('result', result)

    if char.isdigit():
      result = result + char
      count += 1
    elif char.isalpha():
      result = result + numberCombo[char.lower()]
      count +=1
    
  
  if count == 10 or count == 11:
    if count == 10:
      foundResult = True;
      result = '(' + result[:3] + ')' + result[3:]
      result = result[:8] + '-' + result[8:]
      print(result)
    elif count == 11 and result[0] == '1':
      foundResult = True;
      result = result[:1] + '(' + result[1:]
      result = result[:5] + ')' + result[5:]
      result = result[:9] + '-' + result[9:]


  
  if foundResult == False:
    return ''
  elif foundResult == True:
    return result
  
  
  
  
  
  
  
  
print('final result', phone_number('1-800-CARPETS'))