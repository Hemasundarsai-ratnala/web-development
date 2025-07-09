class ArgThisConstructor {
    ArgThisConstructor() {
        this("Java");
        System.out.println("Default constructor called");
    }

    ArgThisConstructor(String str) {
        System.out.println("Argument constructor called: " + str);
    }

    public static void main(String[] args) {
        new ArgThisConstructor();
    }
}
