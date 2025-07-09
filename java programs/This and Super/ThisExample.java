class ThisExample {
    int a = 10;
    String name = "Java";

    void printUsingThis() {
        System.out.println("Using this: " + this.a + ", " + this.name);
    }

    void printWithoutThis() {
        System.out.println("Without using this: " + a + ", " + name);
    }

    public static void main(String[] args) {
        ThisExample obj = new ThisExample();
        obj.printUsingThis();
        obj.printWithoutThis();
    }
}
