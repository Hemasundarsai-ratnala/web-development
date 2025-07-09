class Cow extends Animal {
    void sound() {
        System.out.println("Cow moos.");
    }

    public static void main(String[] args) {
        Cow c = new Cow();
        c.eat();   
        c.sound(); 
    }
}
