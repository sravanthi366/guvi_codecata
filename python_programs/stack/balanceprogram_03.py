open_list = ["[","{","("] 
close_list = ["]","}",")"] 
  

def check(myStr): 
    stack = [] 
    for i in myStr: 
        if i in open_list: 
            stack.append(i) 
        elif i in close_list: 
            pos = close_list.index(i) 
            if ((len(stack) > 0) and
                (open_list[pos] == stack[len(stack)-1])): 
                stack.pop() 
            else: 
                return "no"
    if len(stack) == 0: 
        return "yes"
    else: 
        return "no"
  
  


print(check(input())) 
  
