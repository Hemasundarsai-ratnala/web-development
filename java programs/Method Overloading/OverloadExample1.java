class OverloadExample1 {
    void display(int a) {
        System.out.println("Single int: " + a);
    }

    void display(int a, int b) {
        System.out.println("Two ints: " + a + ", " + b);
    }

    public static void main(String[] args) {
        OverloadExample1 obj = new OverloadExample1();
        obj.display(10);
        obj.display(10, 20);
    }
}
