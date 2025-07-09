class ConstructorDemo {
    ConstructorDemo() {
        System.out.println("Default Constructor");
    }

    ConstructorDemo(int a) {
        System.out.println("One-Arg Constructor: " + a);
    }

    ConstructorDemo(int a, String b) {
        System.out.println("Two-Arg Constructor: " + a + ", " + b);
    }

    public static void main(String[] args) {
        new ConstructorDemo();
        new ConstructorDemo(10);
        new ConstructorDemo(20, "Java");
    }
}
