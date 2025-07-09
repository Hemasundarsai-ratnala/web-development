class SuperParent {
    SuperParent() {
        System.out.println("Parent Constructor");
    }
}

class SuperChild extends SuperParent {
    SuperChild() {
        super(); // calls parent constructor
        System.out.println("Child Constructor");
    }

    public static void main(String[] args) {
        new SuperChild();
    }
}
