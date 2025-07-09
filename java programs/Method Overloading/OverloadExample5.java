class OverloadExample5 {
    int add(int a, int b) {
        return a + b;
    }

    // This is not valid overloading – return type alone can't differentiate
    // double add(int a, int b) { return a + b; }
}
