class OverloadExample4 {
    void display(int a, String b) {
        System.out.println("int and String: " + a + ", " + b);
    }

    void display(String a, int b) {
        System.out.println("String and int: " + a + ", " + b);
    }

    public static void main(String[] args) {
        OverloadExample4 obj = new OverloadExample4();
        obj.display(5, "Hi");
        obj.display("Hello", 10);
    }
}
