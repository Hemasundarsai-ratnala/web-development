class ReuseConstructor {
    ReuseConstructor() {
        System.out.println("Constructor called");
    }

    public static void main(String[] args) {
        ReuseConstructor obj = new ReuseConstructor();
		ReuseConstructor obj2 = new ReuseConstructor();
    }
}
