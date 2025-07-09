public class Ex13 {
    public static void main(String[] args) {
        try {
            Class<?> cls = String.class;
            cls.getField("nonexistentField");
        } catch (NoSuchFieldException e) {
            System.out.println("Field not found: " + e);
        }
    }
}
