public class Ex3 {
    static void risky() throws Exception {
        throw new Exception("This is an exception");
    }

    public static void main(String[] args) throws Exception {
        risky(); // No try block, so declared in main
    }
}
