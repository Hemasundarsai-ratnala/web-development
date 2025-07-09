public class Ex14 {
    public static void main(String[] args) {
        try {
            String.class.getMethod("nonexistentMethod");
        } catch (NoSuchMethodException e) {
            System.out.println("Method not found: " + e);
        }
    }
}
