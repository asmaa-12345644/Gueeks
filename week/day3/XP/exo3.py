class Song:
    def __init__(self,lycris):
        self.lycris=lycris
    def sing_me_a_song(self):
       for i in range(len(self.lycris)):
           print(self.lycris[i])

stairway = Song(["There's a lady who's sure", "all that glitters is gold", "and she's buying a stairway to heaven"])
stairway.sing_me_a_song()
