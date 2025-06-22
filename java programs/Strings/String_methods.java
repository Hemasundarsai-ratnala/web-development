class String_methods{
	public static void main(String[] args){
		String s1 = "Hema Sundar Sai";
		String s2 = "AIML";
		String s3 = "AIML";
		String s4 = "aiml";
		System.out.println(s2.equals(s3));
		System.out.println(s2.equalsIgnoreCase(s4));
		System.out.println(s1.startsWith(s3));
		System.out.println(s1.endsWith(s3));
		System.out.println(s2.compareTo(s4));
	}
}
		