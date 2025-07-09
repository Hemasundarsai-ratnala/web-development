class Outer {
    protected interface InnerInterface {
        int num = 100;
        void message();
    }

    static class InnerClass implements InnerInterface {
        public void message() {
            System.out.println("Message from protected interface");
        }
    }

    public static void main(String[] args) {
        InnerClass obj = new InnerClass();
        obj.message();
        System.out.println("num = " + InnerInterface.num);
    }
}
