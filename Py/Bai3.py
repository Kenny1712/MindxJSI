def Bai3():
    M = int(input("Nhập M: "))
    if M <= 10 or M > 10**8:
        print("Vui lòng nhập lại")
        Bai3()
    else:
        print(3 + 2 * (M - 1))
Bai3()