# 15% tip calculator

def tipcalc(tip = 0.15):
    bill = int(input("How much did the bill cost: "))
    tip = bill * tip
    print("You should tip",tip,"dollars.")
tip = tipcalc()
