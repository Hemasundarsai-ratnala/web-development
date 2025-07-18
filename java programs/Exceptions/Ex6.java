class MyException extends Exception {
    MyException(String msg) {
        super(msg);
    }
}

public class Ex6 {
    public static void main(String[] args) {
        try {
            throw new MyException("Custom exception thrown");
        } catch (MyException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}
