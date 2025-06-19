class Methods{
	public void add(){
		System.out.println(20+10);
	}
	public int subtract(){
		int res=20-10;
		return res;
	}
	public void multiply(int a,int b){
		System.out.println(a*b);
	}
	public int divison(int a,int b){
		int res=a/b;
		return res;
	}
	public static void main(String[] args){
		Methods m = new Methods();
		m.add();
		int a=m.subtract();
		System.out.println(a);
		m.multiply(10,30);
		int b= m.divison(100,20);
		System.out.println(b);
		
	}
}
		 