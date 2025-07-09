public class Ex7 {
    public static void main(String[] args) {
        try {
            int a = 5 / 0;
        } catch (Exception e) {
            System.out.println("Caught");
        } finally {
            System.out.println("Finally block executed");
        }
    }
}
