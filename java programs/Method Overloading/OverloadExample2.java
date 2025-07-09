class OverloadExample2 {
    void display(int a) {
        System.out.println("Int: " + a);
    }

    void display(String s) {
        System.out.println("String: " + s);
    }

    public static void main(String[] args) {
        OverloadExample2 obj = new OverloadExample2();
        obj.display(10);
        obj.display("Hello");
    }
}
