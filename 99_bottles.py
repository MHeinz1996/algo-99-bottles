def bottle_song(num):
    i = num
    x = "bottles"
    y = "bottle"

    while(i>0):
        if(i != 1):
            print(i, x, "of beer on the wall,", i, x, "of beer.")
            print("Take one down and pass it around,", i-1, x, "of beer on the wall.")
        else:
            print(i, y, "of beer on the wall,", i, y, "of beer.")
            print("Take one down and pass it around, no more bottles of beer on the wall.")
            print("No more bottles of beer on the wall, no more bottles of beer.")
            print("Go to the store and buy some more,", num, "bottles of beer on the wall.")

        i -= 1

# Main
bottle_song(99)