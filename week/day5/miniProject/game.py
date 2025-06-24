import random
class Game:
    def get_user_item(self):
        select=input("Select (r)ock,(p)aper, or (s)cissors: ")
        while (select!="r" and select!="p" and select!="s" ):
            select=input("Select (r)ock,(p)aper, or (s)cissors: ")
        return select
    
    def  get_computer_item(self):
         random_Choice=random.choice("rps")
         return random_Choice
    
    def get_game_result(self, user_item, computer_item):
           if(user_item==computer_item):
                return "drew"
           elif((user_item=="r" and computer_item=="s") or (user_item=="p" and computer_item=="r") or (user_item=="s" and computer_item=="p")):
                return "win"
           else:
                return "lose"
           
    def play(self):
          choice=self.get_user_item()
          computer=self.get_computer_item()
          result=self.get_game_result(choice,computer)
          print(f"You selected {choice}. The computer selected {computer}. You {result}")
          return result

            