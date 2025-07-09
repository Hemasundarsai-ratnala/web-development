class ThisConstructor {
    ThisConstructor() {
        this(10); // calls parameterized constructor
        System.out.println("Default Constructor");
    }

    ThisConstructor(int a) {
        System.out.println("Parameterized Constructor: " + a);
    }

    public static void main(String[] args) {
        new ThisConstructor();
    }
}
