class SVIET{
	static int a=10;
	int b=3;
	{
		System.out.println("SVIET");
	}
	static{
		System.out.println("Static SVIET");
	}
	static void College(){
		System.out.println("Static college");
	}
	void inst_college(){
		System.out.println("Instance SVIET");
	}
}

class Student1{
	static int x=10;
	int y=3;
	{
		System.out.println("Student");
	}
	static{
		System.out.println("Static Student");
	}
	static void Student(){
		System.out.println("Static Student");
	}
	void inst_Student(){
		System.out.println("Instance Student");
	}
	public static void main(String[] args){
		SVIET S = new SVIET();
		Student1 s = new Student1();
		S.inst_college();
		S.College();
		s.inst_Student();
		Student();
	}
}