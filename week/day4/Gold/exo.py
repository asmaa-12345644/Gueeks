class BankAccount:
    def __init__(self, balance, username, password):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            print(f"Welcome {username}!")
            return True
        return False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("You must be authenticated to deposit.")
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("You must be authenticated to withdraw.")
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        if amount > self.balance:
            raise Exception("Insufficient funds.")
        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("You must be authenticated to withdraw.")
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot withdraw beyond the minimum balance.")
        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")
