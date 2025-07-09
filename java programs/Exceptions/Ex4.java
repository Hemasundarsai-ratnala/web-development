public class Ex4 {
    public static void main(String[] args) {
        try {
            int a = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic: " + e);
        } catch (Exception e) {
            System.out.println("General: " + e);
        }
    }
}
