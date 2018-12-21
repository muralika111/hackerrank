def taumBday(b, w, bc, wc, z):
    arr=[]
    arr.append(bc*b+wc*w)
    arr.append(bc*b+(bc+z)*w)
    arr.append((wc+z)*b+wc*w)
    return min(arr)
#test input
taumBday(7,7,4,2,1)