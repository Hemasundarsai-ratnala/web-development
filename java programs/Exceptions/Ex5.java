public class Ex5 {
    public static void main(String[] args) {
        try {
            throw new Exception("My custom message");
        } catch (Exception e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}
