class Replace{
	public static void main(String[] args){
		String s1 = "  Hema Sundar Sai is an AI Enthusiat, always explores about AI Technolgy";
		System.out.println(s1.replace("Hema Sundar Sai","Lokesh"));
		System.out.println(s1.replaceAll("AI","Gen-AI"));
	}
}