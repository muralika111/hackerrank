def timeConversion(s):
    l=len(s)
    if s[l-2]=="P":
        if s[:2]!="12":
            return str(int(s[:2])+12)+s[2:l-2] 
        else: 
            return s[:l-2]

    else:
        if s[:2]!="12":
            return s[:l-2]
        else:
            return "00"+s[2:l-2]
print(timeConversion("01:24:45PM"))
