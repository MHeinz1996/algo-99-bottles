def bottle_song(num):   # Function has a parameter for a number
    i = num # set the variable 'i' to the value of the passed parameter
    x = "bottles"   # initialize variable x as 'bottles'
    y = "bottle"    # initialize variable y as 'bottle'

    while(i>0): # while loops while 'i' is greater than 0
        if(i != 1): # if 'i' does not equal 1...
            print(i, x, "of beer on the wall,", i, x, "of beer.")   # print these lines making sure to use the value of 'x' which is bottles (plural)
            if((i-1) != 1): # if 'i-1' does not equal 1...
                print("Take one down and pass it around,", i-1, x, "of beer on the wall.")  # print these lines making sure to use the value of 'x' which is bottles (plural)
            else:   # if 'i-1' does equal 1...
                print("Take one down and pass it around,", i-1, y, "of beer on the wall.")  # print these lines making sure to use the value of 'y' which is bottle (singular)

        else:   # if 'i' does equal 1...
            print(i, y, "of beer on the wall,", i, y, "of beer.")   # print these lines making sure to use the value of 'y' which is bottle (singular)
            print("Take one down and pass it around, no more bottles of beer on the wall.")
            print("No more bottles of beer on the wall, no more bottles of beer.")
            print("Go to the store and buy some more,", num, "bottles of beer on the wall.")

        i -= 1  # decrement 'i' for the next loop

# Main
bottle_song(99)