def bai2():
    N = int(input("Nhập số nguyên N: "))
    x = 0
    if not N > 10 and N < 10**8:
        print("vui lòng nhập lại")
        bai2()
    else:
        for i in range(N+1):
            if i % 7 == 0:
                x += 1
        print(x)
bai2()