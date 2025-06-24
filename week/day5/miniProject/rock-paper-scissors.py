from game import Game

def get_user_menu_choice():
    menu=input("Menu\n(g) Play a new game\n(x) Show scores and Quit: ")
    return menu

def print_results(results):
    print("Game Results:")
    for key,value in results.items() :
        print(f" You {key} {value} times")
    print("Thank you for playing! ")

def main():
   results = {"win": 0, "lose": 0, "drew": 0}
   m=get_user_menu_choice()
   while ( m != "x"):     
        g=Game()
        result=g.play()
        results[result] += 1
        m=get_user_menu_choice()

   print_results(results)

main()