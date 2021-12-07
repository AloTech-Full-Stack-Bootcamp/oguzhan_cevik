import random


def random_number_generator_while(n, l):
    randList = []

    if n < (10**l-(10 ** (l - 1))+1):#Checks if l is greater than n number of digits
        ## creates unique n random numbers
        while len(randList)< n:

            rand= random.randrange(10 ** (l - 1), 10 ** l)
            if rand not in randList:
                randList.append(rand)
                yield rand
    else:
        print('l number of digits must be greater than n random numbers ')
        return


print(list(random_number_generator_while(9, 1)))

print('second assigment-------------------------------------')

# increase input by 1 and reverse the return value
def my_awesome_decorator(fun):
    def wrapped(*args):
        list = []
        for i in args:
            list.append(i + 1)
        list = not fun(*list)
        return list

    return wrapped


@my_awesome_decorator
def mod_batch(*numbers):
    for i in numbers:
        if i % 3 != 0:
            return False
    return True


print(mod_batch(3, 2, 5))