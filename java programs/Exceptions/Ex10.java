public class Ex10 {
    public static void main(String[] args) {
        try {
            Class.forName("com.example.MissingClass");
        } catch (ClassNotFoundException e) {
            System.out.println("Class not found: " + e);
        }
    }
}
