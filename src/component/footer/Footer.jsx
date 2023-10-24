import   './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='Footer-left'>
            <h3>ما لا يسع أطفال المسلمين جهله</h3>
            <h6> ,مشروع يحوي منهجًا يسيرًا سهلًا لمسائل لا يسع المسلم جهلها </h6>
            <h6 className='Footer-left-h6'>يشمل مسائل العقيدة والفقه والسيرة والآداب والتفسير والحديث والأخلاق والأذكار </h6>
            <button>اسلامك</button>
        </div>
        <div className='Footer-right'>
            <h2>المواقع الشخصيه</h2>
            <div >
                <a href='https://www.facebook.com/profile.php?id=100009392357660' target='_blank'><i class="fa-brands fa-facebook fa-2x"></i></a>
                <a href='https://www.facebook.com/profile.php?id=100009392357660' target='_blank'><i class="fa-brands fa-instagram fa-2x"></i></a>
                <a href='https://www.facebook.com/profile.php?id=100009392357660' target='_blank'><i class="fa-brands fa-twitter fa-2x"></i></a>
            </div>
        </div>
    </footer>
    <div className='Footer-Name'>
        <h2>يوسف احمد محمد عراقي</h2>
    </div>
    </>
  )
}

export default Footer