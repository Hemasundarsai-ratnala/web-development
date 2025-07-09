class ModifiersDemo {
    private ModifiersDemo() {
        System.out.println("Private Constructor");
    }

    public ModifiersDemo(int x) {
        System.out.println("Public Constructor: " + x);
    }

    protected ModifiersDemo(String msg) {
        System.out.println("Protected Constructor: " + msg);
    }

    ModifiersDemo(double d) {
        System.out.println("Default (Package-Private) Constructor: " + d);
    }

    public static void main(String[] args) {
        // All constructors accessed within the same class
        new ModifiersDemo();
        new ModifiersDemo(10);
        new ModifiersDemo("Java");
        new ModifiersDemo(3.14);
    }
}
