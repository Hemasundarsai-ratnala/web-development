class InvalidConstructor {
    // This is NOT a constructor, it's a method
    int InvalidConstructor() {
        System.out.println("Method with int return");
        return 1;
    }

    String InvalidConstructor(String name) {
        System.out.println("Method with String return");
        return name;
    }

    public static void main(String[] args) {
        InvalidConstructor obj = new InvalidConstructor();
        obj.InvalidConstructor();
        obj.InvalidConstructor("Java");
    }
}
