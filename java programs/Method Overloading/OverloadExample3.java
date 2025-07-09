class OverloadExample3 {
    void display(int a) {
        System.out.println("Display called: " + a);
    }

    // This is not valid overloading: same signature
    public static void main(String[] args) {
        OverloadExample3 obj = new OverloadExample3();
        obj.display(100);
    }
}
