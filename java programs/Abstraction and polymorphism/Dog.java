class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks.");
    }

    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  
    }
}
