def kiemtra_so():
    N = input("Nhập 1 số: ")
    try:
        int(N)
        if int(N) > 10 and int(N) <= 10**8:
            print("Đã nhập đúng yêu cầu")
        else:
            kiemtra_so()
    except ValueError:
        print("Đã nhập sai")
kiemtra_so()