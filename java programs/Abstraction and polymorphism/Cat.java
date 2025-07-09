class Cat extends Animal {
    void sound() {
        System.out.println("Cat meows.");
    }

    public static void main(String[] args) {
        Cat c = new Cat();
        c.sound(); 
    }
}
